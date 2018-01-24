import homeCtrl from 'components/home/home.controller';

describe('Main controller', () => {
    let ctrl;
    let scope;

    beforeEach(angular.mock.module('hiplatform'));

    beforeEach(inject(($controller, $rootScope) => {
        scope = $rootScope.$new();

        ctrl = $controller(homeCtrl, {
            $scope: scope
        });
    }));

    it('should set application name on controller', () => {
        expect(ctrl.applicationName).toEqual('hiplatform');
    });
});
