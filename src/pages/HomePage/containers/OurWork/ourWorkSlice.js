import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: `${process.env.REACT_APP_NOTHING_INTERESTING}`,
});

const processResponseData = (image) => {
  return {
    id: image.id,
    url: image.urls.regular,
  };
};

const initialState = {
  // imagesTest: {
  //   firstTab: [],
  //   secondTab: [],
  //   thirdTab: [],
  //   fourthTab: [],
  // },
  // images: [],
  firstTab: [],
  secondTab: [],
  thirdTab: [],
  fourthTab: [],
  status: 'idle',
  error: null,
};

// fetchImagesUrls([528639, 'h4BD0NfPm6s', 8504570])

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (collectionIds = [528639, 'h4BD0NfPm6s', 8504570]) => {
    // if (!collectionIds.length) return;

    const [secondTab, thirdTab, fourthTab] = await Promise.all(
      collectionIds.map((id) =>
        unsplash.photos.getRandom({
          collectionIds: [id],
          count: 6,
        })
      )
    );

    // console.log(secondTab);
    // console.log(thirdTab);
    // console.log(fourthTab);

    const tabs = {
      secondTab: secondTab.response.map(processResponseData),
      thirdTab: thirdTab.response.map(processResponseData),
      fourthTab: fourthTab.response.map(processResponseData),
    };

    return tabs;
  }
);

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = state.images.concat(action.payload);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
