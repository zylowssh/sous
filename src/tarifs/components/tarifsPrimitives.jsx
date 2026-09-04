import { Sawtooth as SharedSawtooth } from '../../components/EditorialPrimitives';

export { Arr, Check, Circle, Flame, Pin, SousLogoMark, Star, Underline } from '../../components/EditorialPrimitives';

export const Sawtooth = (props) => <SharedSawtooth teeth={60} {...props} />;
