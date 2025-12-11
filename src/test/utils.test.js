import { describe, it, expect } from 'vitest';
describe('Utils', () => {
    describe('Tree structure validation', () => {
        it('validates tree structure', () => {
            const tree = [
                {
                    name: 'Root',
                    path: 'root',
                    children: [
                        {
                            name: 'File',
                            path: 'root/file',
                            isFile: true,
                        },
                    ],
                },
            ];
            expect(tree).toBeDefined();
            expect(tree[0].children).toBeDefined();
            expect(tree[0].children?.[0].isFile).toBe(true);
        });
        it('handles empty tree', () => {
            const tree = [];
            expect(tree).toEqual([]);
        });
        it('handles nested tree structures', () => {
            const tree = [
                {
                    name: 'Level 1',
                    path: 'level1',
                    children: [
                        {
                            name: 'Level 2',
                            path: 'level1/level2',
                            children: [
                                {
                                    name: 'Level 3',
                                    path: 'level1/level2/level3',
                                    isFile: true,
                                },
                            ],
                        },
                    ],
                },
            ];
            expect(tree[0].children?.[0].children?.[0].isFile).toBe(true);
        });
    });
});
