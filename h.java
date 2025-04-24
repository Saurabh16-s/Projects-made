import java.util.ArrayList;
import java.util.Collections;
class h{
    public static void main(String[] args) {
        ArrayList<Integer> list=new ArrayList<Integer>();


        list.add(0);
        list.add(2);
        list.add(3);
        System.out.println(list);

        int r=list.get(0);
        System.out.println(r);

        list.add(1,6);
        System.out.println(list);

        list.set(0,7);
        System.out.println(list);

        list.remove(3);
        System.out.println(list);

        int n =list.size();
        System.out.println(n);

        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i));
        }
        System.out.println();

        Collections.sort(list);
        System.out.println(list);



    }
}