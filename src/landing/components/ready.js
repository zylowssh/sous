let ready = false;
const subs = new Set();

export const setReady = () => {
  ready = true;
  subs.forEach((fn) => fn());
  subs.clear();
};

export const onReady = (fn) => {
  if (ready) {
    fn();
    return () => {};
  }
  subs.add(fn);
  return () => subs.delete(fn);
};
