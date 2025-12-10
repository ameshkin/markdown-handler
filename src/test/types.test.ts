import { describe, it, expect } from 'vitest';
import type { DocNode } from '../types';

describe('Types', () => {
  it('DocNode interface works correctly', () => {
    const node: DocNode = {
      name: 'Test',
      path: 'test',
      isFile: true,
    };
    
    expect(node.name).toBe('Test');
    expect(node.path).toBe('test');
    expect(node.isFile).toBe(true);
  });

  it('DocNode with children works correctly', () => {
    const node: DocNode = {
      name: 'Folder',
      path: 'folder',
      children: [
        {
          name: 'Child',
          path: 'folder/child',
          isFile: true,
        },
      ],
    };
    
    expect(node.children).toBeDefined();
    expect(node.children?.length).toBe(1);
    expect(node.children?.[0].name).toBe('Child');
  });
});

