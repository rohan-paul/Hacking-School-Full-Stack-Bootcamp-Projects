/* A> Getting the two's complement is as simple as adding 1 to the one's complement

http://en.wikipedia.org/wiki/Signed_number_representations#Two.27s_complement

So, the steps will be -
Invert all the bits through the number - and thereby get the one's complement

Then Add one

A> http://speakingjs.com/es5/ch11.html

The twos’ complement -x of a number x is the ones’ complement plus one. Adding a number to its twos’ complement results in 0 (ignoring overflow beyond the most significant digit).

A> http://disq.us/p/1raf82j

Basically, (r-1)'s complement of a number in radix 'r' = number obtained by subtracting every digit from (r-1) . r's complement = (r-1)'s complement + 1

B> https://www.w3schools.com/js/js_bitwise.asp

JavaScript binary numbers are stored in two's complement format.

This means that a negative number is the bitwise NOT of the number plus 1:

C> https://stackoverflow.com/questions/12337360/javascript-tilde-twos-complement

The Tilde operator ~ is the Bitwise NOT operator (only inverts the bits of its operand).

~ is not the two's complement, it's the binary inversion operator.

For a positive number n,

~n + 1 = -n

*/

