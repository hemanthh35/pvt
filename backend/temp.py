
#include <iostream>  // for input and output
int main() {
    int number;
    // Ask the user for a number
    std::cout << "Enter an integer: ";
    std::cin >> number;
    // Check if the number is positive, negative, or zero
    if (number > 0) {
        std::cout << "You entered a positive number." << std::endl;
    } else if (number < 0) {
        std::cout << "You entered a negative number." << std::endl;
    } else {
        std::cout << "You entered zero." << std::endl;
    }
    return 0;
}