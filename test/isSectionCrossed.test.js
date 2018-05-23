/**
 * @file isSectionCrossed
 * @author LeuisKen <leuisken@foxmail.com>
 */

'use strict';

const assert = require('assert');
const isSectionCrossed = require('../src/isSectionCrossed');

const SECTION_SET_WITH_CROSS = [
    [100, 200],
    [200, 300],
    [250, 400]
];

const SECTION_SET_WITHOUT_CROSS = [
    [100, 200],
    [200, 300],
    [300, 400]
];

describe('isSectionCrossed基本测试', function () {
    it('有重叠示例', function () {
        assert.strictEqual(
            isSectionCrossed(SECTION_SET_WITH_CROSS),
            true
        );
    });
    it('无重叠示例', function () {
        assert.strictEqual(
            isSectionCrossed(SECTION_SET_WITHOUT_CROSS),
            false
        );
    });
});
