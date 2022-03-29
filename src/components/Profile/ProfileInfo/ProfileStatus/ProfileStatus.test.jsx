import React from "react";
import { create } from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus Component', ()=> {
	test('status from props should be in the state', () => {
		const component = create(<ProfileStatus status='portador'/>)
		const instance = component.getInstance();
		expect(instance.state.status).toBe('portador')
	});

	test('After render span with status should be in the jsx', () => {
		const component = create(<ProfileStatus status='portador'/>)
		const root = component.root;
		const span = root.findByType('span')
		expect(span).not.toBeNull()
	});

	test('After render span should have right text', () => {
		const component = create(<ProfileStatus status='portador'/>)
		const root = component.root;
		const span = root.findByType('span')
		expect(span.children[0]).toBe('portador')
	});

	test('After render input should not be in the jsx', () => {
		const component = create(<ProfileStatus status='portador'/>)
		const root = component.root;
		expect(() => {
			const input = root.findByType('input')
		}).toThrow()
	});

	test('Input should be displayed in edit mode instead of span', () => {
		const component = create(<ProfileStatus status='portador'/>)
		const root = component.root;
		const span = root.findByType('span')
		span.props.onDoubleClick();
		let input = root.findByType('input')
		expect(input.props.value).toBe('portador')
	});

	test('Callback should be called', () => {
		const mockCallback = jest.fn()
		const component = create(<ProfileStatus status='portador' updateStatus={mockCallback}/>)
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1)
	});
})


