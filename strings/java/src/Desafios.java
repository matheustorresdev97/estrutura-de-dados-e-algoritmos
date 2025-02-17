import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Desafios {

    // 1. removeNonDigits - sem regex
    public static String removeNonDigits(String str) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c >= '0' && c <= '9') {
                sb.append(c);
            }
        }
        return sb.toString();
    }

    // 1. removeNonDigits2 - com regex
    public static String removeNonDigits2(String str) {
        return str.replaceAll("\\D", "");
    }

    // 2. Classe para armazenar dados de data
    public static class DateData {
        int day;
        int month;
        int year;

        public DateData(int day, int month, int year) {
            this.day = day;
            this.month = month;
            this.year = year;
        }

        @Override
        public String toString() {
            return "Dia: " + day + ", Mês: " + month + ", Ano: " + year;
        }
    }

    // 2. extractDateData usando split
    public static DateData extractDateData(String date) {
        String[] parts = date.split("/");
        int day = Integer.parseInt(parts[0]);
        int month = Integer.parseInt(parts[1]);
        int year = Integer.parseInt(parts[2]);
        return new DateData(day, month, year);
    }

    // 2. extractDateData2 usando substring (assumindo zero à esquerda)
    public static DateData extractDateData2(String date) {
        int day = Integer.parseInt(date.substring(0, 2));
        int month = Integer.parseInt(date.substring(3, 5));
        int year = Integer.parseInt(date.substring(6));
        return new DateData(day, month, year);
    }

    // 3. formatDate - formata a data com dia e mês com 2 dígitos
    public static String formatDate(int day, int month, int year) {
        return String.format("%02d/%02d/%d", day, month, year);
    }

    // 4. Classe para armazenar informações do e-mail
    public static class EmailInformation {
        String username;
        String domain;
        boolean isBrazilian;

        public EmailInformation(String username, String domain, boolean isBrazilian) {
            this.username = username;
            this.domain = domain;
            this.isBrazilian = isBrazilian;
        }
    }

    // 4. extractEmailInformation - separa o usuário, domínio e verifica se é brasileiro
    public static EmailInformation extractEmailInformation(String email) {
        String[] parts = email.split("@");
        String username = parts[0];
        String domain = parts[1];
        boolean isBrazilian = domain.endsWith(".br");
        return new EmailInformation(username, domain, isBrazilian);
    }

    // 5. longestCommonPrefix - encontra o prefixo comum mais longo
    public static String longestCommonPrefix(String[] v) {
        if (v == null || v.length == 0) return "";
        Arrays.sort(v);
        String first = v[0];
        String last = v[v.length - 1];
        int minLength = Math.min(first.length(), last.length());
        int i = 0;
        while (i < minLength && first.charAt(i) == last.charAt(i)) {
            i++;
        }
        return first.substring(0, i);
    }

    // 6. Validação de senha (método sem regex)
    public static boolean hasLetter(String str) {
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
                return true;
            }
        }
        return false;
    }

    public static boolean hasDigit(String str) {
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c >= '0' && c <= '9') {
                return true;
            }
        }
        return false;
    }

    public static boolean hasSpecialChar(String str) {
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == '@' || c == '#' || c == '&') {
                return true;
            }
        }
        return false;
    }

    public static boolean validatePassword(String str) {
        if (str.length() < 8) return false;
        if (!hasLetter(str)) return false;
        if (!hasDigit(str)) return false;
        if (!hasSpecialChar(str)) return false;
        return true;
    }

    // 6. Validação de senha usando regex (dividido em múltiplos testes)
    public static boolean validatePassword2(String str) {
        boolean regex1 = str.matches(".{8,}");
        boolean regex2 = str.matches(".*[a-zA-Z].*");
        boolean regex3 = str.matches(".*\\d.*");
        boolean regex4 = str.matches(".*[@$#].*");
        return regex1 && regex2 && regex3 && regex4;
    }

    // 6. Validação de senha usando uma única regex
    public static boolean validatePassword3(String str) {
        String regex = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@&#]).{8,}$";
        return str.matches(regex);
    }

    // 7. Classe para representar uma transação
    public static class Transaction {
        String name;
        int time;
        int amount;
        String city;

        public Transaction(String csv) {
            String[] parts = csv.split(",");
            this.name = parts[0];
            this.time = Integer.parseInt(parts[1]);
            this.amount = Integer.parseInt(parts[2]);
            this.city = parts[3];
        }
    }

    // 7. invalidTransactions - identifica transações inválidas
    public static List<String> invalidTransactions(String[] transactions) {
        int n = transactions.length;
        boolean[] invalid = new boolean[n];
        List<String> result = new ArrayList<>();

        Transaction[] tArray = new Transaction[n];
        for (int i = 0; i < n; i++) {
            tArray[i] = new Transaction(transactions[i]);
        }

        for (int i = 0; i < n; i++) {
            Transaction ti = tArray[i];
            if (ti.amount > 1000) {
                invalid[i] = true;
            }
            for (int j = i + 1; j < n; j++) {
                Transaction tj = tArray[j];
                if (ti.name.equals(tj.name) && Math.abs(ti.time - tj.time) <= 60 && !ti.city.equals(tj.city)) {
                    invalid[i] = true;
                    invalid[j] = true;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (invalid[i]) {
                result.add(transactions[i]);
            }
        }
        return result;
    }

    // 8. isAnagram - verifica se duas strings são anagramas (ordenação)
    public static boolean isAnagram(String s, String t) {
        char[] sArray = s.toCharArray();
        char[] tArray = t.toCharArray();
        Arrays.sort(sArray);
        Arrays.sort(tArray);
        return Arrays.equals(sArray, tArray);
    }

    // 8. isAnagram2 - verifica se duas strings são anagramas (contagem)
    public static boolean isAnagram2(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
        }
        for (int i = 0; i < t.length(); i++) {
            count[t.charAt(i) - 'a']--;
        }
        for (int val : count) {
            if (val != 0) return false;
        }
        return true;
    }

    // Método main para testar as funções
    public static void main(String[] args) {
        // Teste 1: removeNonDigits e removeNonDigits2
        String cpf = "949.237.847-99";
        System.out.println("removeNonDigits: " + removeNonDigits(cpf));
        System.out.println("removeNonDigits2: " + removeNonDigits2(cpf));

        // Teste 2: extractDateData e extractDateData2
        DateData dateData = extractDateData("21/07/2010");
        System.out.println("extractDateData: " + dateData);

        DateData dateData2 = extractDateData2("21/07/2010");
        System.out.println("extractDateData2: " + dateData2);

        // Teste 3: formatDate
        System.out.println("formatDate: " + formatDate(21, 7, 2010));

        // Teste 4: extractEmailInformation
        EmailInformation emailInfo1 = extractEmailInformation("joao.silva23@yahoo.com.br");
        System.out.println("Usuario: " + emailInfo1.username);
        System.out.println("Dominio: " + emailInfo1.domain);
        System.out.println("Brasileiro: " + (emailInfo1.isBrazilian ? "sim" : "nao"));

        EmailInformation emailInfo2 = extractEmailInformation("maria123@gmail.com");
        System.out.println("Usuario: " + emailInfo2.username);
        System.out.println("Dominio: " + emailInfo2.domain);
        System.out.println("Brasileiro: " + (emailInfo2.isBrazilian ? "sim" : "nao"));

        // Teste 5: longestCommonPrefix
        String[] words1 = {"flower", "flow", "flight"};
        System.out.println("Longest Common Prefix: \"" + longestCommonPrefix(words1) + "\"");
        String[] words2 = {"dog", "racecar", "car"};
        System.out.println("Longest Common Prefix: \"" + longestCommonPrefix(words2) + "\"");

        // Teste 6: validatePassword, validatePassword2, validatePassword3
        System.out.println("validatePassword(\"amerca1@\"): " + validatePassword("amerca1@"));
        System.out.println("validatePassword(\"amrca154682\"): " + validatePassword("amrca154682"));
        System.out.println("validatePassword2(\"amerca1@\"): " + validatePassword2("amerca1@"));
        System.out.println("validatePassword2(\"amrca154682\"): " + validatePassword2("amrca154682"));
        System.out.println("validatePassword3(\"amerca1@\"): " + validatePassword3("amerca1@"));
        System.out.println("validatePassword3(\"amrca154682\"): " + validatePassword3("amrca154682"));

        // Teste 7: invalidTransactions
        String[] transactions1 = {"alice,20,800,mtv", "alice,50,100,beijing"};
        System.out.println("invalidTransactions 1: " + invalidTransactions(transactions1));
        String[] transactions2 = {"alice,20,800,mtv", "alice,50,1200,mtv"};
        System.out.println("invalidTransactions 2: " + invalidTransactions(transactions2));
        String[] transactions3 = {"alice,20,800,mtv", "bob,50,1200,mtv"};
        System.out.println("invalidTransactions 3: " + invalidTransactions(transactions3));

        // Teste 8: isAnagram e isAnagram2
        System.out.println("isAnagram(\"anagram\", \"nagaram\"): " + isAnagram("anagram", "nagaram"));
        System.out.println("isAnagram(\"batata\", \"attaba\"): " + isAnagram("batata", "attaba"));
        System.out.println("isAnagram(\"rat\", \"car\"): " + isAnagram("rat", "car"));

        System.out.println("isAnagram2(\"anagram\", \"nagaram\"): " + isAnagram2("anagram", "nagaram"));
        System.out.println("isAnagram2(\"batata\", \"attaba\"): " + isAnagram2("batata", "attaba"));
        System.out.println("isAnagram2(\"rat\", \"car\"): " + isAnagram2("rat", "car"));
    }
}
