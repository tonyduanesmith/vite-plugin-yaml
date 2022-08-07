type ESModule = Record<string, unknown> & { default: Record<string, unknown> };

/**
 * Validate that the dynamically imported module has a default export which is an object.
 */
export function isESModule(module: unknown): module is ESModule {
  return typeof module === 'object' && module !== null && 'default' in module;
}

/**
 * Dynamically import a directory of YAML files as JSON.
 */
export function importContent() {
  const contentModules = import.meta.glob('./content/**/*.{yml,yaml}', {
    eager: true,
  });

  console.log(contentModules);
  if (!contentModules) throw new Error('Could not find any content files');

  return Object.entries(contentModules).map(([path, module]) => {
    // This is a mild validation on the imported module
    if (!isESModule(module)) throw new Error(`${path} is not an ES module`);

    // Get the `id` field from the imported YAML files.
    const { id } = module.default;

    // In this example, we expect the `id` field to be a number.
    if (!id || typeof id !== 'number') {
      throw new Error(
        `Invalid content: ${path}\n${JSON.stringify(module, null, 2)}`
      );
    }

    return module.default;
  });
}
