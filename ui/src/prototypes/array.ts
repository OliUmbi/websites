declare global {
  interface Array<T> {
    move(from: number, to: number): Array<T>;
  }
}

Array.prototype.move = (from: number, to: number) => {
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};

// todo review this idea it is currently not used
