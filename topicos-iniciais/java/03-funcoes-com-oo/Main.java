public class Main {

    public static void main(String[] args) {

        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphones", 200.0, 2);

        var total1 = p1.total();
        var total2 = p2.total();

        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p1.getName());
        System.out.println(p2.getName());

        System.out.println(total1);
        System.out.println(total2);

        p1.updatePrice(10);
        System.out.println(p1.getPrice());
    }
}