import BaseUrl from './base-url';

function getAbsoluteUrl(route) {
    return BaseUrl + route;
}

export default class ServicesUrl {

    loginUrl() {
        return getAbsoluteUrl(`login/auth`);
    }

    getAllUSersUrl() {
        return getAbsoluteUrl(`usuario/search`);
    }

    getUSerUrl(userId) {
        return getAbsoluteUrl(`usuario/search/${userId}`);
    }

    postNewUserUrl() {
        return getAbsoluteUrl(`usuario/insert`);
    }

    updateUserUrl(userId) {
        return getAbsoluteUrl(`usuario/update/${userId}`);
    }

    removeUserUrl(userId) {
        return getAbsoluteUrl(`usuario/delete/${userId}`);
    }

    getStepsUrl() {
        return getAbsoluteUrl(`etapa/search`);
    }

    getBranchsUrl() {
        return getAbsoluteUrl(`filial/search`);
    }

    getChannelsUrl() {
        return getAbsoluteUrl(`canal/search`);
    }

    getOriginAccountUrl() {
        return getAbsoluteUrl(`oriconta/search`);
    }

    getTypeAccountUrl() {
        return getAbsoluteUrl(`tpconta/search`);
    }

    getExecutivesUrl() {
        return getAbsoluteUrl(`executivo/search`);
    }

    postNewAccountUrl() {
        return getAbsoluteUrl(`cliente/insert`);
    }

    getAccountsUrl() {
        return getAbsoluteUrl(`cliente/search`);
    }

    postNewAddressUrl() {
        return getAbsoluteUrl(`endereco/insert`);
    }

    getAccountUrl(accountId) {
        return getAbsoluteUrl(`cliente/search/${accountId}`);
    }

    updateAccountUrl(accountId) {
        return getAbsoluteUrl(`cliente/update/${accountId}`);
    }

    deleteAccountUrl(accountId) {
        return getAbsoluteUrl(`cliente/delete/${accountId}`);
    }

    getAddressUrl(idAddress) {
        return getAbsoluteUrl(`endereco/search/${idAddress}`);
    }

    updateAddressUrl(idAddress) {
        return getAbsoluteUrl(`endereco/update/${idAddress}`);
    }

    getCampaignUrl() {
        return getAbsoluteUrl(`campanha/search`);
    }

    getPorteUrl() {
        return getAbsoluteUrl(`porte/search`);
    }

    getFormUrl() {
        return getAbsoluteUrl(`forma/search`);
    }

    getConditionsUrl() {
        return getAbsoluteUrl(`condicao/search`);
    }

    getExecutivesUrl() {
        return getAbsoluteUrl(`executivo/search`);
    }

    getPricesUrl() {
        return getAbsoluteUrl(`tabela/search`);
    }

    getBusinessUnitUrl() {
        return getAbsoluteUrl(`undnegocio/search`);
    }

    postNewDefinitionUrl() {
        return getAbsoluteUrl(`definicao/insert`);
    }

    getCepDefinitionsUrl() {
        return getAbsoluteUrl(`definicao/search`);
    }

    deleteDefinitionUrl(idDefinition) {
        return getAbsoluteUrl(`definicao/delete/${idDefinition}`);
    }

    deleteSegmentUrl(idSegment) {
        return getAbsoluteUrl(`segmento/delete/${idSegment}`);
    }

    getSegmentUrl(idCnae, idAccount) {
        return getAbsoluteUrl(`segmento/search/${idCnae}/${idAccount}`);
    }

    getDefinitionUrl(idDefinition) {
        return getAbsoluteUrl(`definicao/search/${idDefinition}`);
    }

    updateDefinitionUrl(idDefinition) {
        return getAbsoluteUrl(`definicao/update/${idDefinition}`);
    }

    getCnaesUrl() {
        return getAbsoluteUrl(`cnae/search`);
    }

    postNewSegmentUrl() {
        return getAbsoluteUrl(`segmento/insert`);
    }

    getSegmentsUrl() {
        return getAbsoluteUrl(`segmento/search`);
    }

    getTypesMediaUrl() {
        return getAbsoluteUrl(`tipomidia/search`);
    }

    postNewMediaUrl() {
        return getAbsoluteUrl(`midias/insert`);
    }

    getMediasUrl() {
        return getAbsoluteUrl(`midias/search`);
    }

    deleteMediaUrl(mediaId) {
        return getAbsoluteUrl(`midias/delete/${mediaId}`);
    }

    getMediaUrl(mediaId) {
        return getAbsoluteUrl(`midias/search/${mediaId}`);
    }

    updateMediaUrl(mediaId) {
        return getAbsoluteUrl(`midias/update/${mediaId}`);
    }

    getRisksUrl() {
        return getAbsoluteUrl(`risco/search`);
    }

    postNewRiskUrl() {
        return getAbsoluteUrl(`riscocliente/insert`);
    }

    getRisksAccountUrl() {
        return getAbsoluteUrl(`riscocliente/search`);
    }

    deleteRiskAccountUrl(idRiskAccount) {
        return getAbsoluteUrl(`riscocliente/delete/${idRiskAccount}`);
    }

    getRiskAccountUrl(idRiskAccount) {
        return getAbsoluteUrl(`riscocliente/search/${idRiskAccount}`);
    }

    updateRiskAccountUrl(idRiskAccount) {
        return getAbsoluteUrl(`riscocliente/update/${idRiskAccount}`);
    }

    getTypeActionsUrl() {
        return getAbsoluteUrl(`tipoacao/search`);
    }

    postNewClientActionUrl() {
        return getAbsoluteUrl(`acaocliente/insert`);
    }

    getClientActionsUrl() {
        return getAbsoluteUrl(`acaocliente/search`);
    }

    deleteClientActionUrl(idClientAction) {
        return getAbsoluteUrl(`acaocliente/delete/${idClientAction}`);
    }

    getClientActionUrl(idClientAction) {
        return getAbsoluteUrl(`acaocliente/search/${idClientAction}`);
    }

    updateActionUrl(idClientAction) {
        return getAbsoluteUrl(`acaocliente/update/${idClientAction}`);
    }

    getRolesContactsUrl() {
        return getAbsoluteUrl(`papel/search`);
    }

    getPositionsContactsUrl() {
        return getAbsoluteUrl(`cargo/search`);
    }

    postNewContactActionUrl() {
        return getAbsoluteUrl(`contatos/insert`);
    }

    getClientContactsUrl() {
        return getAbsoluteUrl(`contatos/search`);
    }

    deleteContactAccountUrl(idClientContact) {
        return getAbsoluteUrl(`contatos/delete/${idClientContact}`);
    }

    getClientContactUrl(idClientContact) {
        return getAbsoluteUrl(`contatos/search/${idClientContact}`);
    }

    updateClientContactUrl(idClientContact) {
        return getAbsoluteUrl(`contatos/update/${idClientContact}`);
    }

    getAllOpportunitiesUrl() {
        return getAbsoluteUrl(`oportunidade/search`);
    }
}
