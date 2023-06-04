import { render, screen } from '@testing-library/react';
import Greet from '../Greet';

/**
 * @desc
 * * Get by class node return the matching node of a query, and throw a descriptive error if no element match or if more than one match is found.
 * * The suffix that are used mostly,we will see the todo getBy
 * Todo Role, LabelText, TextId, PlaceholderText, Text, DisplayValue, AltText, Title
 * @example
 *
 * * getByRole - It describe the semantic HTML element roles, By default many HTML component have their pre-defined roles. (‼️ This is always to be more preference than any other testing methods)
 * an example we can use a div as button element by defining its role through the role attribute role="button"
 *
 * ! Priority Order for Queries
 * * getByRole - TOP PREFERENCE
 * * getByLabelText - Usually Good for the form fields
 * * getByPlaceHolderText
 * * getByText - Non interactive elements
 * * getByDisplayValue
 * ! Still not found the elements inside the components
 * * getByAltText
 * * getByTitle
 * ! Last useful method if these all are not working for you is
 * * getByTextId
 */
describe('Testing Library with getBy RTL Query method', () => {
  describe('Testing form fields using the getByRole', () => {
    /**
     * * Testing with the getByRole method
     */
    it('Should have all the form fields like checkbox, combo-box, textbox', () => {
      render(<Greet name="JEE" />);
      // * Must have the textbox inside the component with the options objects
      const nameElement = screen.getByRole('textbox', {
        name: 'Name',
      });
      const addressElement = screen.getByRole('textbox', {
        name: 'Address',
      });
      expect(nameElement).toBeInTheDocument();
      expect(addressElement).toBeInTheDocument();

      // * Must have the select box inside the components
      const countryLocationElement = screen.getByRole('combobox');
      expect(countryLocationElement).toBeInTheDocument();

      // * Must have the checkbox inside the components
      const checkboxElement = screen.getByRole('checkbox');
      expect(checkboxElement).toBeInTheDocument();

      // * Must have the button element inside the components
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });

    it('should must form field heading ', () => {
      render(<Greet name="NIET" />);
      // * Get by role gives us teh level option to verify the test cases for the heading role only like h1 -> Level 1, we can provide that instead of the name tags.
      const pageHeading = screen.getByRole('heading', {
        level: 1,
      });
      const pageSubheading = screen.getByRole('heading', {
        level: 2,
      });
      expect(pageHeading).toBeInTheDocument();
      expect(pageSubheading).toBeInTheDocument();
    });
  });

  /**
   * * Search getByLabelText method
   */
  describe('Testing form fields with getByLabelTest', () => {
    it('should be able to get pass the test', () => {
      render(<Greet name="Ting-Tang" />);
      const labelTextNameElement = screen.getByLabelText('Name', {
        selector: 'input', // * Selector type like Input, Select, Textarea, etc
      });
      expect(labelTextNameElement).toBeInTheDocument();
    });
  });

  /**
   * * Search getByPlaceHolderTest method
   *
   */
  describe('getByPlaceHolderTest', () => {
    it('should be able to pass the element through the above defined methods.', () => {
      render(<Greet name="Angular" />);
      const placeHolderEle = screen.getByPlaceholderText('Enter the name');
      expect(placeHolderEle).toBeInTheDocument();
    });
  });

  /**
   * GetByText method
   * @description
   *
   * * it will search all the elements that have the text node or text content that matching the passed selector text fields.
   */
  describe('getByText method', () => {
    it('should be able to pass the element through the above defined methods.', () => {
      render(<Greet name="Angular" />);
      const textMethodEle = screen.getByText('Job location');
      expect(textMethodEle).toBeInTheDocument();
    });
  });

  /**
   * GetByDisplayValue
   *
   * @description
   *
   * * getByDisplayValue returns the input, textarea, and select box that have matching display values
   */
  describe('getByDisplayValue', () => {
    it('should be able to pass the element through the above defined methods.', () => {
      render(<Greet name="Angular" />);
      const displayElement = screen.getByDisplayValue('linkdin');
      expect(displayElement).toBeInTheDocument();
    });
  });

  /**
   * GetByTestId
   *
   * @description
   * * GetByTestId returns the element which have a matching data-test-id in the HTML attributes
   */
  describe('getByTestId', () => {
    it('should be able to pass the element through the above defined methods', () => {
      render(<Greet name="Angular" />);
      const matchingTextId = screen.getByTestId('job-form');
      expect(matchingTextId).toBeInTheDocument();
    });
  });

  /**
   * getAllByRole
   * @description
   *
   * * This describe to find the role of the multiple element inside the components
   */
  describe('getAllByRole', () => {
    const techStack = ['JavaScript', 'Angular', 'React', 'Vue', 'NextJS'];
    it('should be able to pass the role of the multiple element inside the components', () => {
      render(<Greet name="Angular" techStack={techStack} />);
      const listElement = screen.getByRole('list');
      expect(listElement).toBeInTheDocument();
    });

    test('Renders the list of the tech stack', () => {
      render(<Greet name="Angular" techStack={techStack} />);
      const listItemElement = screen.getAllByRole('listitem');
      expect(listItemElement).toHaveLength(techStack.length);
    });
  });
});
