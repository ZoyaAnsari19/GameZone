// app/redux/features/gamesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  name: string;
  emoji: string;
}

interface GamesState {
  categories: Record<string, Game[]>;
  selectedCategory: string;
}

const initialState: GamesState = {
  selectedCategory: 'Board Games',
  categories: {
    'Board Games': [
      { name: 'Carrom', emoji: 'Disco Ball' },
      { name: 'Checkers', emoji: 'Checkered Flag' },
      { name: 'Chess', emoji: 'Chess Pawn' },
      { name: 'Cribbage', emoji: 'Playing Cards' },
      { name: 'Backgammon', emoji: 'White Circle' },
      { name: 'Dice Party', emoji: 'Dice' },
      { name: 'Dominoes', emoji: 'White Square Button' },
      { name: 'Four in a Row', emoji: 'Red Circle' },
    ],
    'Strategy Games & Puzzles': [
      { name: 'Minesweepers', emoji: 'Bomb' },
      { name: 'Wordbox', emoji: 'Speech Balloon' },
      { name: 'Go', emoji: 'Yin Yang' },
      { name: 'Literati', emoji: 'Books' },
      { name: 'Mancala', emoji: 'Seedling' },
    ],
    'Card Games': [
      { name: "Hold'em Poker", emoji: 'Club Suit' },
      { name: 'Spades', emoji: 'Spade Suit' },
      { name: 'Gin Rummy', emoji: 'Diamond Suit' },
      { name: 'Hearts', emoji: 'Red Heart' },
      { name: 'Go Fish', emoji: 'Fish' },
    ],
    'Board & Party Games': [
      { name: 'Ludo', emoji: 'Orange Circle' },
      { name: 'Bingo', emoji: 'B Button' },
      { name: 'Dots & Boxes', emoji: 'Check Box' },
      { name: 'Bankroll', emoji: 'Money Bag' },
      { name: 'Werewolf (Mafia)', emoji: 'Wolf' },
    ],
    'Sports & Action Games': [
      { name: 'Archery', emoji: 'Bow and Arrow' },
      { name: 'Bounce', emoji: 'Bouncing Ball' },
      { name: 'Basketball', emoji: 'Basketball' },
      { name: 'Bowling', emoji: 'Bowling' },
      { name: 'Carrom', emoji: 'Red Circle' },
      { name: 'Cup Pong', emoji: 'Red Cup' },
      { name: 'Darts', emoji: 'Dart' },
      { name: 'Mini Golf', emoji: 'Golf' },
      { name: 'Table Soccer', emoji: 'Soccer Ball' },
    ],
    'Plato Originals': [
      { name: 'Match Monsters', emoji: 'Gem Stone' },
      { name: 'Brawlbots', emoji: 'Robot' },
      { name: 'Plox', emoji: 'Alien' },
      { name: 'Blitz League', emoji: 'Trophy' },
    ],
  },
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = gamesSlice.actions;
export default gamesSlice.reducer;