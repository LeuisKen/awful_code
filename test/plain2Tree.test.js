/**
 * @file plain2Tree
 * @author LeuisKen <leuisken@foxmail.com>
 */

'use strict';

const assert = require('assert');
const plain2Tree = require('../src/plain2Tree');

const TABLE_DATA = [
    {
        province: '浙江',
        city: '杭州',
        name: '西湖'
    }, {
        province: '四川',
        city: '成都',
        name: '锦里'
    }, {
        province: '四川',
        city: '成都',
        name: '方所'
    }, {
        province: '四川',
        city: '阿坝',
        name: '九寨沟'
    }
];

const ORDERED_KEYS = ['province', 'city', 'name'];

const SAMPLE_OUTPUT = [
    {
        value: '浙江',
        children: [
            {
                value: '杭州',
                children: [
                    {
                        value: '西湖'
                    }
                ]
            }
        ]
    },
    {
        value: '四川',
        children: [
            {
                value: '成都',
                children: [
                    {
                        value: '锦里'
                    },
                    {
                        value: '方所'
                    }
                ]
            },
            {
                value: '阿坝',
                children: [
                    {
                        value: '九寨沟'
                    }
                ]
            }
        ]
    }
];

describe('plain2Tree基本测试', function () {
    it('基本数据互转示例', function () {
        const output = plain2Tree(TABLE_DATA, ORDERED_KEYS);
        assert.strictEqual(
            JSON.stringify(output),
            JSON.stringify(SAMPLE_OUTPUT)
        );
    });
});
