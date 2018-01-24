export default /*@ngInject*/ class HomeController {

    constructor($scope, HomeServices, Services) {
        this._$scope = $scope;
        this._HomeServices = HomeServices;
        this._Services = Services;

        this.init();
    }

    init() {
        this.getAlbuns();
    }

    getAlbuns() {
        const params = {
            params: {
                id: 284925307,
                entity: 'album'
            }
        };
        this._HomeServices.getAlbuns(params).then(payload => {
            this.infos = payload.results[0];
            delete payload.results[0];
            const albuns = [];
            payload.results.forEach((value) => {
                const paramsMusic = {
                    params: {
                        id: value.collectionId,
                        entity: 'song'
                    }
                };
                this._HomeServices.getMusics(paramsMusic).then(response => {
                    delete response.results[0];
                    this.musics = response.results;
                    albuns.push({
                        album: value,
                        musics: response.results
                    });
                }).catch(() => {
                    this._toastr.error('Erro ao pesquisar musicas!', 'Musicas');
                });
            });
            this.albuns = albuns;
        }).catch(() => {
            this._toastr.error('Erro ao pesquisar álbuns!', 'Álbuns');
        });
    }
}
