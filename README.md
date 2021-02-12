Word Chains
===========

Code Challenge:

Implement a function `chain(word1, word2)`, that returns a short-as-possible list that "links" the two given words, where:

- Your list starts with `word1` and ends with `word2`
- Each word in your list differs by only one letter from the entry before it
- Each word in your list is in /usr/share/dict/words

All words involved are expected to be all lowercase. Ignore any words from the dictionary that contain uppercase letters or punctuation.
If no chain can be found between the input words, return an empty value that is idiomatic for the language that you're using. You should expect each call to this function always to return within a few seconds.

Examples:

- chain("duck", "bill") might return: ["duck", "buck", "bulk", "bilk", "bill"]
- chain("spinning", "top") returns an empty value
- chain("sport", "spine") might return: ["sport", "spore", "spire", "spine"]
- chain("tallow", "wallow") should return: ["tallow", "wallow"]
- chain(
- chain("orange", "pillow") returns an empty value
- chain(“ape”, “man”) might return: ["ape", "apt", "opt", "oat", "mat", "man"]


### How to Install

  * clone the repository
  * run `yarn` to install node modules


### How to run tests

  * simply run  `yarn test` 
