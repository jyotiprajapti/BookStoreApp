import {verticalScale, horizontalScale} from './ScaleConstants';
export default theme = {
  colors: {
    maroon: '#800f15',
    pink: '#FFE7E8',
    grey: '#9D9D9D',
    lightGrey: '#E2E2E2',
    black: '#0f0f0f',
    lightBlack:'#00000029',
    offWhite: '#F5F5F5',
    white: '#FFFFFF'
  },

  spacing: {
    space1: 5,
    space2: 12,
    space3:14,
    space4:20,
    space5: 25,
    space6:26,
    space7:35
  },
  height: {
    height1: verticalScale(30),
    height2: verticalScale(40),
    height3: verticalScale(50),
    height4: verticalScale(60),
    height5: verticalScale(75),
    height6: verticalScale(100),
    height7: verticalScale(150),
    height8: verticalScale(200),
    height9: verticalScale(500)
  },
  width: {
    width1: horizontalScale(50),
    width2: horizontalScale(95),
    width3: horizontalScale(140),
    width4: horizontalScale(160),
    width5: horizontalScale(200),
    width6: horizontalScale(330),
    width7: horizontalScale(360),
  },
  text:{
    text1: 15,
    text2:20,
    text3:30,
    text4:35,
    text5:40,
    text6:45
  }
};
