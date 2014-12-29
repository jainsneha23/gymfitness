package in.stj.plugins;

import java.util.ArrayList;

import android.app.Activity;
import android.database.Cursor;
import android.provider.MediaStore;

import static java.lang.Integer.parseInt;

public class Mp3Manager {

    public static ArrayList<genericSongClass> getSongs(Activity activity) {
        // Some audio may be explicitly marked as not being music
        String selection = MediaStore.Audio.Media.IS_MUSIC + " != 0";

        String[] projection = { MediaStore.Audio.Media._ID,
                MediaStore.Audio.Media.TITLE,
                MediaStore.Audio.Media.ARTIST,
                MediaStore.Audio.Media.ALBUM,
                MediaStore.Audio.Media.DATA,
                MediaStore.Audio.Media.DISPLAY_NAME,
                MediaStore.Audio.Media.DURATION };

        final String sortOrder = MediaStore.Audio.AudioColumns.TITLE
                + " COLLATE LOCALIZED ASC";

        Cursor cursor = null;

        ArrayList<genericSongClass> songs = new ArrayList<genericSongClass>();;

        try {
            cursor = activity.managedQuery(
                    MediaStore.Audio.Media.EXTERNAL_CONTENT_URI, projection,
                    selection, null, sortOrder);

            genericSongClass GSC;

            while (cursor.moveToNext()) {
                GSC = new genericSongClass();
                GSC.id = parseInt(cursor.getString(0));
                GSC.title = cursor.getString(1);
                GSC.artist = cursor.getString(2);
                GSC.album = cursor.getString(3);
                GSC.data = cursor.getString(4);
                GSC.displayName = cursor.getString(5);
                GSC.duration = parseInt(cursor.getString(6));
                songs.add(GSC);
            }
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (cursor != null) {
                cursor.close();
            }
        }

        return songs;
    }
}

class genericSongClass {
    int id = 0;
    String title = "";
    String artist = "";
    String album = "";
    String data = "";
    String displayName = "";
    int duration = 0;
    boolean isChecked = false;
}