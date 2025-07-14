export class SchemaCollectionBuilder {
  static buildSchemaEntryCollectionName(schemaName: string): string {
    return `${schemaName}`;
  }

  static buildSchemaUserCollectionName(schemaName: string): string {
    return `${this.buildSchemaEntryCollectionName(schemaName)}User`;
  }
}
