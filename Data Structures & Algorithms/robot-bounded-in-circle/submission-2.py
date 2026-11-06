class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        position = [0, 0]
        direction = 0 # 0, 1, 2, 3

        for instruction in instructions:
            if instruction == "R":
                direction = (direction + 1) % 4
                continue
            if instruction == "L":
                direction = (direction - 1) % 4
                continue
            
            if direction == 0:
                position[1] += 1
            elif direction == 1:
                position[0] += 1
            elif direction == 2:
                position[1] -= 1
            else:
                position[0] -= 1
        return position == [0,0] or direction != 0
