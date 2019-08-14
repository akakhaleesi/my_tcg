import Jasmine from 'jasmine'
import specReporter from 'jasmine-spec-reporter'

var jasmine = new Jasmine()
jasmine.configureDefaultReporter({print: () => {}})
jasmine.addReporter(new specReporter())
jasmine.loadConfigFile('spec/support/jasmine.json')

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        'requests/**/*[sS]pec.js',
        'utils/**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});

jasmine.execute()
