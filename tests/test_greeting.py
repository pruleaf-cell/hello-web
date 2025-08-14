import unittest

class GreetingTest(unittest.TestCase):
    def test_greeting_contents(self):
        with open('myfirstfile.txt', 'r', encoding='utf-8') as f:
            contents = f.read()
        self.assertIn('Hello web', contents)

if __name__ == '__main__':
    unittest.main()
