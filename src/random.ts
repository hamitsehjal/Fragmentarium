import crypto from 'crypto';



export default function randomNumber(min: number, max: number): number {
  const range = max - min;
  // Calculate the number of bytes needed to represent all possible values in the range (max-min)

  /**
   * if max is 100 and min is 1, we want to include all possible values therefore, range+1
   * Math.log2() to calculate the logarithm to base 2 - Gives us number of bits
   * Math.ceil() to round up the rest of the logarithm to nearest whole number (we don't want partial bits)
   * result/8 to convert the bits to bytes
   */
  const byteCount = Math.ceil((Math.log2(range + 1)) / 8);
  // const byteCount = (Math.ceil((Math.log2(range + 1)) / 8));

  // Generate RandomBytes - returns Buffer of cryptographically secure random Bytes
  /**
   * @returns Buffer
   */
  const randomBytes = crypto.randomBytes(byteCount);

  // Convert the randomBytes to a Number and adjusting it to fit a specific range 
  // `readUIntBE` converts the buffer to numerical value (read more about it here: https://nodejs.org/api/buffer.html#bufreaduintbeoffset-bytelength)
  // `value % range` ensures that the value falls within the specified range 
  // `+ min` ensures we start from the minimum value

  return randomBytes.readUIntBE(0, byteCount) % range + min;




}
