/**
 * ClassName
 * @description Class helper to dynamically create a components className
 */

class ClassName {
  constructor( defaultClassName ) {
    this.classes = new Set();
    if ( defaultClassName ) this.classes.add( defaultClassName );
  }

  add( className ) {
    if ( !className ) return this.classes;
    const split = className.split( ' ' );
    split.forEach(( i ) => this.classes.add( i ));
    return this.classes;
  }

  get string() {
    return Array.from( this.classes ).join( ' ' );
  }
}

export default ClassName;
