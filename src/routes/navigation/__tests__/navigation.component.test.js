import * as reactRedux from 'react-redux';
import { screen, fireEvent } from '@testing-library/react';

import Navigation from '../navigation.component';

import { renderWithProviders } from '../../../utils/test/test.utils';
import { signOutStart } from '../../../store/user/user.action';

describe('Navigation tests', () => {
  test('It should render a sign in link and not sign out if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test('It should render sign out and not sign in if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test('It should not render cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: []
        }
      }
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test('It should render cart dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: []
        }
      }
    });

    const dropdownTextElement = screen.getByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeInTheDocument();
  });

  // TODO: needs updates due to redux v8
  xtest('It should dispatch signOutStart action when clicking on the Sign Out link', async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

    mockDispatch.mockClear();
  });
});
