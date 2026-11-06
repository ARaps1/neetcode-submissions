class Solution:

    def encode(self, strs: List[str]) -> str:
        # TC: O(n), n is length of words
        # SC: O(n), n is the length of words
    
        str_builder = []

        for word in strs:
            str_builder.append(str(len(word)) + "$" + word)
        return "".join(str_builder) 

    def decode(self, s: str) -> List[str]:
        # TC: O(j), j characters
        # SC: O(n), initial words
        i = 0
        res = []

        while i < len(s):
            j = i
            while j < len(s) and s[j] != "$":
                j += 1
            length = int(s[i:j])
            res.append(s[j + 1: j + 1 + length])
            i = j + 1 + length
        return res


