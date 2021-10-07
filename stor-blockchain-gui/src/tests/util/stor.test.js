const stor = require('../../util/stor');

describe('stor', () => {
  it('converts number storoshi to stor', () => {
    const result = stor.storoshi_to_stor(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string storoshi to stor', () => {
    const result = stor.storoshi_to_stor('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number storoshi to stor string', () => {
    const result = stor.storoshi_to_stor_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string storoshi to stor string', () => {
    const result = stor.storoshi_to_stor_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number stor to storoshi', () => {
    const result = stor.stor_to_storoshi(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string stor to storoshi', () => {
    const result = stor.stor_to_storoshi('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number storoshi to colouredcoin', () => {
    const result = stor.storoshi_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string storoshi to colouredcoin', () => {
    const result = stor.storoshi_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number storoshi to colouredcoin string', () => {
    const result = stor.storoshi_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string storoshi to colouredcoin string', () => {
    const result = stor.storoshi_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to storoshi', () => {
    const result = stor.colouredcoin_to_storoshi(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to storoshi', () => {
    const result = stor.colouredcoin_to_storoshi('1000');

    expect(result).toBe(1000000);
  });
});
