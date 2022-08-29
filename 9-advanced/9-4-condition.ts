{
  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>; // Boolean

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : 'object';
}
