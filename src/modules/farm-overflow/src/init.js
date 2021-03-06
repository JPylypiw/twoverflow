require([
    'helper/i18n',
    'two/ready',
    'two/farm',
    'two/farm/ui',
    'two/farm/Events'
], function (
    i18n,
    ready,
    farmOverflow,
    farmOverflowInterface
) {
    if (farmOverflow.isInitialized()) {
        return false
    }

    var updateModuleLang = function () {
        var langs = __farm_locale
        var current = $rootScope.loc.ale
        var data = current in langs
            ? langs[current]
            : langs['en_us']

        i18n.setJSON(data)
    }

    ready(function () {
        updateModuleLang()
        farmOverflow.init()
        farmOverflowInterface()
    }, ['map'])
})
