import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class Character_with_longest_consecutive_repetitionTest {
    @Test
    public void exampleTests() {
        Assertions.assertArrayEquals(new Object[]{"a", 4}, Character_with_longest_consecutive_repetition.longestRepetition("aaaabb"));
        Assertions.assertArrayEquals(new Object[]{"a", 4}, Character_with_longest_consecutive_repetition.longestRepetition("bbbaaabaaaa"));
        Assertions.assertArrayEquals(new Object[]{"u", 3}, Character_with_longest_consecutive_repetition.longestRepetition("cbdeuuu900"));
        Assertions.assertArrayEquals(new Object[]{"b", 5}, Character_with_longest_consecutive_repetition.longestRepetition("abbbbb"));
        Assertions.assertArrayEquals(new Object[]{"a", 2}, Character_with_longest_consecutive_repetition.longestRepetition("aabb"));
        Assertions.assertArrayEquals(new Object[]{"", 0}, Character_with_longest_consecutive_repetition.longestRepetition(""));
    }
}