from cgi import test
from this import s


drzava_grad={'MK':"Skopje","ES":"Madrid","GB":"London"}
print(drzava_grad)
print(drzava_grad("MK"))
print(drzava_grad['MK':"Skopje"])
print(drzava_grad)
print(drzava_grad("MK"))
drzava_grad["MK"]="Ohrid"
drzava_grad = dict[(1,2),(3,4),(5,6)]
print(drzava_grad)
print(drzava_grad("MK"))
drzava_grad[1,2,3]=[4,5,6]
drzava_grad=[4,5,6]
print(drzava_grad={'MK':"Skopje","ES":"Madrid","GB":"London"})
print(drzava_grad)

#Da se napishe Python skripta koja proveruva dali daden kluc daden vo recnik
userdata={"user1":"pass1","user2":"pass2","user3":"pass3"}
if userdata.get('clear') is not None:
    print("Klucot postoi")
else:
    print("Klucot ne postoi")

#Da se napishe Python programa sto ke gi pomnozi site vrednosti vo recnikot
numbers={1:1,2:4,3:9,6:25}
print(numbers.values(), numbers.keys())
prod=1
for i in numbers.keys():
    print(numbers[i])
    prod*=numbers[i]
print(prod)

#Da se napishe Python skripta sho ke izbroi kolku "vrednosti" vo recnikot se prisutni
dictionary={"item1":[45.50],"item2":[35],"item3":[41.30,1,2],"item4":True,"item5":24}
cnt=0
for value in dictionary.values():
    if type(value) is list:
        cnt+=1
        print(cnt)
        cnt=0
        print(dictionary.items())
        for kluc,vrednost in dictionary.items():
            if type(vrednost) is list:
                cnt+=1
        print(cnt)
        cnt=0
        if type(vrednost[1]) is list:
            cnt+=1
        print(cnt)

shop={'item1':[45.50],'item2':35,'item3':41.30,'item4':55,'item5':24}
items_price=(list(shop.values()))
print(items_price)
items_price.sort(reverse=True)
print(items_price)
items_names=(list(shop.values()))
for i in range(3):
    for item_name in items_names:
        cena=[shop[item_name]]
        cena_sporedba = items_price[i]
        if cena==cena_sporedba:
            print(item_name+":" + str(shop[item_name]))
            break

#Da se napishe Python skripta shto ke ischita text file.
txt=open("test.txt","r+")
print(txt.read())
txt.close()
with read('test.txt','r+') as txt:
    print(txt.read(40))

def file_read_name():
    file_read_name('test.txt')

with open('test.txt') as txt:
    print(txt.read(40))

# Da se napishe Python skripta shto ke zapishe vo file, a posle ke napravi append.

with open('./test.txt','w') as txt:
    txt.write("Kire123")

with open('./test.txt','a') as txt:
    txt.write("Janev")

with open('./test.txt',"w") as txt:
    txt.write("Semos \n")

file_name = 'test.txt'
linii=["Kire \n","test.txt"]
with open('./test.txt',"w") as txt:
    txt.write("Semos Edukacija \n")

def file_read_name(fname:str):
    with open('fname') as f:
        txt.write('fname')
        print('f')

def longest_word(fname:str):
    with open('fname')  as f:
        words=f.read().write()
        max_len = len(max(words,key=str))
        print(max_len)
        for word in words:
            if len(word) == max_len:
                return word

print(longest_word('fname'))

#Da se napishe nekakva sodrzina vo file 'first.txt' da se zatvori, a posle toa da se iskopira sodrzinata od "first.txt" vo "second.txt"
file_content = ['Hello World \n','second line \n','third line \n']

first_file = './first.txt'
second_file = './second.txt'

def file_read(information:str):
    with open('first.txt') as f:
        first_file.write('Hello World!')
        print('f')

def second_read(information2:str):
    with open('second.txt') as f, open('second.txt') as s:
        for line in f:
            print(line)

import csv
f=open("test_csv.csv","r")
csv_f=csv.reader('f')
print('csv_f')

import csv
with open('test2.csv','f') as f:
    writer=csv.writer('f')
    writer.writerow("Kire","Janev",26)
    writer.writerow("Gjorgji","Skopje",20)
    writer.writerow(["Kire","Janev",26],["Skopje",36])

    with open('test2.csv' , 'delimiter') as f:
    writer=csv.writer('f')
    writer.writerow("Kire","Janev",26)
    writer.writerow("Gjorgji","Skopje",20)
    writer.writerow(["Kire","Janev",26],["Skopje",36])

import csv
f=open('airtravel.csv','v') 
f1=open('airtravel_output.csv','w')
