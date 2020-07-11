module.exports = {
  name: 'ngx-split',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-split',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
