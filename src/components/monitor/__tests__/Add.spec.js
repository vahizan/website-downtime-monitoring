import { shallowMount } from '@vue/test-utils';
import Add from '../Add.vue';

describe("Add", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.resetAllMocks();
        jest.clearAllTimers();
    });

    test('When Button is Clicked Then Should Increment Count', async () => {
        const wrapper = shallowMount(Add);

        const button = wrapper.find("#add-button");
        expect(() => wrapper.find('#websites-added').text()).toThrowError();
        await button.trigger("click");

        expect(wrapper.find('#websites-added').text()).toEqual('Websites Being Tracked: 1');
    })
});

