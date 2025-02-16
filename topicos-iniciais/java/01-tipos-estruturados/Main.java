public class Main {
    public static void main(String[] args) {

        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphones", 200.0, 2);

        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p1.getName());
        System.out.println(p2.getName());
    }
}