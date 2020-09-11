import java.math.BigInteger;
public class Faberge {
    public static BigInteger height(BigInteger n, BigInteger m) {
        BigInteger h = BigInteger.ZERO;
        BigInteger a = BigInteger.ONE;
        for (int e = 1; e <= n.intValue(); h = h.add(a), e++)
            a = a.multiply(m.add(BigInteger.valueOf(1 - e))).divide(BigInteger.valueOf(e));
        return h;
    }
}