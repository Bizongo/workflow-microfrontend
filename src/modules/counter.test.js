import { init } from "@rematch/core";
import * as models  from "./index";

describe("[count] model", () => {
  it("incrementAsync effect should increment given a payload", async () => {
    const store = init({
      models,
    });

    await store.dispatch.count.incrementAsync(3);

    const myModelData = store.getState().count;
    expect(myModelData).toEqual(3);
  });
});
