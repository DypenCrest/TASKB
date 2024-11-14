describe('Image Zoom', () => {
  beforeEach(() => {
    // Visit the page where the image is located
    cy.visit('http://localhost:5173');
  });

  it('should zoom image on hover', () => {
    // Target the image element
    const image = cy.get('img.zoom-image');

    // Hover over the image to trigger zoom
    image.trigger('mouseover');

    // Assert that the image's transform style changes (zoom effect)
    image.should('have.css', 'transform').and('not.equal', 'matrix(1, 0, 0, 1, 0, 0)');
  });

  it('should zoom image on click', () => {
    // Target the image element
    const image = cy.get('img.zoom-image');

    // Click the image to zoom
    image.click();

    // Check if the zoomed-in image (or a modal/overlay) is visible
    cy.get('.zoomed-image').should('be.visible');
  });
});
