import Big from 'big.js';

const MOJO_PER_STOR = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height < 2 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(4).times(7 / 8);
  }
  if (height < 4 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(2).times(7 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(1).times(7 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(0.5).times(7 / 8);
  }
  if (height < 10 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(0.25).times(7 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(0.125).times(7 / 8);
  }    

  return MOJO_PER_STOR.times(0.0625).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height < 2 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(4).times(1 / 8);
  }
  if (height < 4 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(2).times(1 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(1).times(1 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(0.5).times(1 / 8);
  }
  if (height < 10 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(0.25).times(1 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_STOR.times(0.125).times(1 / 8);
  }  

  return MOJO_PER_STOR.times(0.0625).times(1 / 8);
}