import { shallowMount } from "@vue/test-utils";
// eslint-disable-next-line import/no-unresolved
import HamburgerMenu from "@/components/HeaderComponents/HamburgerMenu.vue";

describe("HamburgerMenu.vue", () => {
  let wrapper = null;
  const menuElements = [
    { name: "start", id: "start" },
    { name: "projects", id: "projects" },
    { name: "contact", id: "contact" },
  ];
  beforeEach(() => {
    wrapper = shallowMount(HamburgerMenu, {
      props: { menuElements },
    });
  });
  it("Check if numbers of elements is same as props", () => {
    const menuEls = wrapper.findAll(".menu-element");
    expect(menuEls.lenght).toBe(menuElements.lenght);
  });
  // it("Check if id's are equal", () => {
  //   const menuEls = wrapper.findAll(".menu-element");
  //   console.log(menuEls[0].);
  //   expect(menuEls.map((el) => el.attributes().href)).toEqual(
  //     menuElements.map((el) => el.id)
  //   );
  // });
});
