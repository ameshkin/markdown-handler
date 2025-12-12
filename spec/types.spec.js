// Jasmine tests for type definitions (JavaScript version)

describe('Type Definitions', () => {
  describe('DocNode', () => {
    it('should have required properties', () => {
      const node = {
        name: 'Test',
        path: 'test',
      };
      
      expect(node.name).toBe('Test');
      expect(node.path).toBe('test');
    });

    it('should support optional children', () => {
      const node = {
        name: 'Parent',
        path: 'parent',
        children: [
          {
            name: 'Child',
            path: 'parent/child',
            isFile: true,
          },
        ],
      };
      
      expect(node.children).toBeDefined();
      expect(node.children.length).toBe(1);
    });

    it('should support isFile flag', () => {
      const fileNode = {
        name: 'File',
        path: 'file',
        isFile: true,
      };
      
      expect(fileNode.isFile).toBe(true);
    });
  });

  describe('TemplateVariant', () => {
    it('should accept valid template variants', () => {
      const variants = [
        'minimal',
        'modern',
        'classic',
        'dark',
        'compact',
        'wide',
        'centered',
      ];
      
      variants.forEach(variant => {
        expect(typeof variant).toBe('string');
      });
    });
  });

  describe('TemplateConfig', () => {
    it('should have required properties', () => {
      const config = {
        name: 'Test Template',
        description: 'Test description',
        variant: 'minimal',
      };
      
      expect(config.name).toBe('Test Template');
      expect(config.description).toBe('Test description');
      expect(config.variant).toBe('minimal');
    });

    it('should support optional theme', () => {
      const config = {
        name: 'Test',
        description: 'Test',
        variant: 'minimal',
        theme: 'default',
      };
      
      expect(config.theme).toBe('default');
    });
  });
});
