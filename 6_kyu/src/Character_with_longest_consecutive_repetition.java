public class Character_with_longest_consecutive_repetition {
    public static Object[] longestRepetition(String s) {
        int most = 0, current = 1;
        char currentChar = 0;
        String mostChar = "";
        for (char c : s.toCharArray()) {
            if (c == currentChar) {
                current++;
                if (current > most) {
                    mostChar = c + "";
                }
            } else {
                current = 1;
            }
            if (current > most) {
                most = current;
            }

            currentChar = c;
        }
        return new Object[]{mostChar, most};
    }
}

