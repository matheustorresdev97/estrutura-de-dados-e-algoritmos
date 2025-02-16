public class Main {

    static double total(Product product) {
        return product.getPrice() * product.getQuantity();
    }

    static void updatePrice(Product product, double porcentage) {
        var newPrice = product.getPrice() * (1.0 + porcentage / 100);
        product.setPrice(newPrice);
    }

    public static void main(String[] args) {

        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphones", 200.0, 2);

        var total1 = total(p1);
        var total2 = total(p2);

        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p1.getName());
        System.out.println(p2.getName());
        System.out.println(total1);
        System.out.println(total2);

        updatePrice(p1, 10);
        System.out.println(p1.getPrice());
    }
}