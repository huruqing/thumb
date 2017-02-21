function add(num) {
  return ++num;
}
describe("test add", function(){
    it("test add", function() {
        expect(2).toEqual(add(1));
    })
    it("test add", function() {
        expect(3).toEqual(add(2));
    })
});
