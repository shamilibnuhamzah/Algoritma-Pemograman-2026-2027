#include <iostream>
#include <string>
using namespace std;

int main() {
    int umur = 19;
    double tinggi = 178.5;
    char kelas = 'A';
    bool aktif = true;
    string nama = "Budi";

    const string KAMPUS = "Universitas Djuanda";

    cout << "int   : " << umur << endl;
    cout << "double: " << tinggi << endl;
    cout << "char  : " << kelas << endl;
    cout << "bool  : " << aktif << endl;
    cout << "string: " << nama << endl;
    cout << "const : " << KAMPUS << endl;
    return 0;
}
```[cite: 1]

---

### 2. Kode Program Python (`aritmatika.py`)
```python
a = int(input("Masukin angka a : "))
b = int(input("Masukin angka b : "))

print(a, "+", b, "=", a + b)
print(a, "-", b, "=", a - b)
print(a, "*", b, "=", a * b)
print(a, "/", b, "=", a / b)
print(a, "%", b, "=", a % b)

print(a, ">", b, "=", a > b)
print(a, "==", b, "=", a == b)
```[cite: 1]