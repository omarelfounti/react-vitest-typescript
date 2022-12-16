import Accordion from "./Accordion";
import {render, screen} from "@testing-library/react"

describe('Accordion', () =>{
    test('should show the accordion component', () => {
        render(
            <Accordion title="hello">
                <h3>Content</h3>
                <p>more content</p>
            </Accordion>
        );
        expect(screen.getByText('hello')).toBeDefined()
        });
});








