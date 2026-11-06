class Solution:

    def encode(self, strs: List[str]) -> str:
        str_builder = []

        for word in strs:
            str_builder.append(str(len(word)) + "$" + word)
        return "".join(str_builder)
        # time - O(n) n being list of strings
        # space - O(n) 

    def decode(self, s: str) -> List[str]:
        res, cur_index = [], 0

        while cur_index < len(s):
            # we want to find the range that represents the number
            # this cur_index: index(where $) is found
            j = cur_index
            while s[j] != "$":
                j += 1
            length = int(s[cur_index: j])
            res.append(s[j + 1: j + 1 + length])
            cur_index = j + 1 + length
        return res