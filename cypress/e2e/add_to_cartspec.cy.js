describe("Add to Cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/products/1");
  });

  it("should add item to cart and update localStorage", () => {
    // Ensure the product data is loaded and displayed correctly
    cy.get("h1").should("contain.text", "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");

    // Select a color for the product
    cy.get(".color-selection .color-options div") // Adjust selector for color options
      .first()
      .click();

    // Click on the "Add to Cart" button
    cy.get("button").contains("Add to Cart").click();

    // Assert that an alert was shown indicating success
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Item added to cart successfully!");
    });

    // Check that the cart in localStorage contains the product
    cy.window().then((window) => {
      const cart = JSON.parse(window.localStorage.getItem("cart"));
      expect(cart).to.have.length(1); // Ensure that there is 1 item in the cart

      const cartItem = cart[0];
      expect(cartItem).to.have.property("id");
      expect(cartItem).to.have.property("title");
      expect(cartItem).to.have.property("img");
      expect(cartItem).to.have.property("price");
      expect(cartItem).to.have.property("color");
    });
  });

  it("should not add the same item to cart twice", () => {
    // Add the item to the cart
    cy.get("button").contains("Add to Cart").click();

    // Simulate clicking the "Add to Cart" button again
    cy.get("button").contains("Add to Cart").click();

    // Assert that the same item is not added twice (alert message check)
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Item already exists in the cart.");
    });

    // Check that the cart in localStorage still contains only 1 item
    cy.window().then((window) => {
      const cart = JSON.parse(window.localStorage.getItem("cart"));
      expect(cart).to.have.length(1); // Ensure that there is still only 1 item
    });
  });
});
