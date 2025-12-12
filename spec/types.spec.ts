import type { DocNode, TemplateVariant, TemplateConfig, MarkdownDocsViewerProps } from '../src/types';

describe('Type Definitions', () => {
  describe('DocNode', () => {
    it('should have required properties', () => {
      const node: DocNode = {
        name: 'Test',
        path: 'test',
      };
      
      expect(node.name).toBe('Test');
      expect(node.path).toBe('test');
    });

    it('should support optional children', () => {
      const node: DocNode = {
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
      expect(node.children?.length).toBe(1);
    });

    it('should support isFile flag', () => {
      const fileNode: DocNode = {
        name: 'File',
        path: 'file',
        isFile: true,
      };
      
      expect(fileNode.isFile).toBe(true);
    });
  });

  describe('TemplateVariant', () => {
    it('should accept valid template variants', () => {
      const variants: TemplateVariant[] = [
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
      const config: TemplateConfig = {
        name: 'Test Template',
        description: 'Test description',
        variant: 'minimal',
      };
      
      expect(config.name).toBe('Test Template');
      expect(config.description).toBe('Test description');
      expect(config.variant).toBe('minimal');
    });

    it('should support optional theme', () => {
      const config: TemplateConfig = {
        name: 'Test',
        description: 'Test',
        variant: 'minimal',
        theme: 'default',
      };
      
      expect(config.theme).toBe('default');
    });
  });

  describe('MarkdownDocsViewerProps', () => {
    it('should require tree and content', () => {
      const props: MarkdownDocsViewerProps = {
        tree: [],
        content: '',
      };
      
      expect(props.tree).toBeDefined();
      expect(props.content).toBeDefined();
    });

    it('should support optional props', () => {
      const props: MarkdownDocsViewerProps = {
        tree: [],
        content: '',
        currentPath: 'test',
        sidebarTitle: 'Custom Title',
        sidebarWidth: 300,
        enableSearch: true,
        enableBreadcrumbs: true,
      };
      
      expect(props.currentPath).toBe('test');
      expect(props.sidebarTitle).toBe('Custom Title');
      expect(props.sidebarWidth).toBe(300);
      expect(props.enableSearch).toBe(true);
      expect(props.enableBreadcrumbs).toBe(true);
    });
  });
});

