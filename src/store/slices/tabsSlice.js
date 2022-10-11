import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: '9H6YO1Ur07eWScjDtbIt2AXjtxk-Vewq68fLeyoDcB8',
});

const processResponseData = (image) => {
  return {
    id: image.id,
    url: image.urls.regular,
  };
};

const getRandomImagesFromTabs = (array, number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, number);
};

const randomTab = (array) =>
  array.flatMap((tab) => getRandomImagesFromTabs(tab, 2));

const initialState = {
  tabs: {
    firstTab: [],
    secondTab: [],
    thirdTab: [],
    fourthTab: [],
  },
  status: 'idle',
  error: null,
};

export const fetchImages = createAsyncThunk(
  'tabs/fetchImages',
  async (collectionIds = [528639, 'h4BD0NfPm6s', 8504570]) => {

    const [secondTab, thirdTab, fourthTab] = await Promise.all(
      collectionIds.map((id) =>
        unsplash.photos.getRandom({
          collectionIds: [id],
          count: 6,
        })
      )
    );

    const tabs = {
      secondTab: secondTab.response.map(processResponseData),
      thirdTab: thirdTab.response.map(processResponseData),
      fourthTab: fourthTab.response.map(processResponseData),
    };

    const mergedTabs = {
      ...tabs,
      firstTab: randomTab([tabs.secondTab, tabs.thirdTab, tabs.fourthTab]),
    };

    return mergedTabs;
  }
);

const imagesSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tabs = {
          ...state.tabs,
          ...action.payload,
        };
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
